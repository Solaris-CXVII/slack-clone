import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

type Options = {
  onSuccess?: () => void;
  onError?: () => void;
  onSettled?: () => void;
};
