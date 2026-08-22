export const resourceActions = (path) => ({
  canUpdate: true,
  canDelete: path !== "staff" && path !== "roles",
  updateMethod: path === "staff" ? "PATCH" : "PUT",
  updatePath: (endpoint, item) => path === "staff" ? `${endpoint}/${item.id}/status` : `${endpoint}/${item.id}`,
  updateBody: (item) => path === "staff" ? { status: item.status } : item,
});
