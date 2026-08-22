import { randomUUID } from 'node:crypto';
import { Op } from 'sequelize';
import Subject from '../models/Subject';

export interface SubjectInput {
  name: string;
  code?: string | null;
  description?: string | null;
  syllabusUrl?: string | null;
  status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
}

export const listSubjects = async (publishedOnly = false) => Subject.findAll({
  where: publishedOnly ? { status: 'PUBLISHED' } : undefined,
  order: [['name', 'ASC']]
});

export const findSubject = async (id: string, publishedOnly = false) => Subject.findOne({
  where: {
    id,
    ...(publishedOnly ? { status: 'PUBLISHED' } : {})
  }
});

export const createSubject = (input: SubjectInput) => Subject.create({
  id: randomUUID(),
  name: input.name.trim(),
  code: input.code?.trim() || null,
  description: input.description?.trim() || null,
  syllabus_url: input.syllabusUrl?.trim() || null,
  status: input.status || 'DRAFT'
});

export const updateSubject = async (id: string, input: Partial<SubjectInput>) => {
  const subject = await Subject.findByPk(id);
  if (!subject) return null;

  await subject.update({
    ...(input.name !== undefined ? { name: input.name.trim() } : {}),
    ...(input.code !== undefined ? { code: input.code?.trim() || null } : {}),
    ...(input.description !== undefined ? { description: input.description?.trim() || null } : {}),
    ...(input.syllabusUrl !== undefined ? { syllabus_url: input.syllabusUrl?.trim() || null } : {}),
    ...(input.status !== undefined ? { status: input.status } : {})
  });
  return subject;
};

export const subjectCodeExists = async (code: string, excludeId?: string) => Boolean(await Subject.findOne({
  where: {
    code,
    ...(excludeId ? { id: { [Op.ne]: excludeId } } : {})
  }
}));

