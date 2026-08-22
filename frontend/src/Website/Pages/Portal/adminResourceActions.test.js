import assert from "node:assert/strict";
import test from "node:test";
import { resourceActions } from "./adminResourceActions.js";

test("roles can be updated but not deleted", () => {
  const actions = resourceActions("roles");
  assert.equal(actions.canUpdate, true);
  assert.equal(actions.canDelete, false);
  assert.equal(actions.updateMethod, "PUT");
});

test("staff uses its status endpoint and hides delete", () => {
  const actions = resourceActions("staff");
  assert.equal(actions.canUpdate, true);
  assert.equal(actions.canDelete, false);
  assert.equal(actions.updatePath("/api/v1/admin/staff", { id: "7" }), "/api/v1/admin/staff/7/status");
  assert.deepEqual(actions.updateBody({ id: "7", name: "Admin", status: "INACTIVE" }), { status: "INACTIVE" });
});
