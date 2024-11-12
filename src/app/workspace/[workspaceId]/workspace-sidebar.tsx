import { UseCurrentMember } from "@/features/auth/members/api/use-current-member";
import { useGetWorkspace } from "@/features/workspaces/api/use-get-workspace";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

export const WorkspaceSidebar = () => {
  const workspaceId = useWorkspaceId();

  const { } = UseCurrentMember();
  const { } = useGetWorkspace();

  return <div>Workspace Sidebar</div>;
};
