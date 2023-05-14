import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { logout } from "@/store/features/auth.slice";

/**
 * Log a warning and show a toast!
 */
export const ErrorMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action: any) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
    if (isRejectedWithValue(action)) {
      const errorMsg = action.error.message;
      toast.warn(
        errorMsg && errorMsg !== "Rejected"
          ? errorMsg
          : `${action.payload.status}: Xəta baş verdi ${
              import.meta.env.DEV && `[${action.meta.arg.endpointName}()]`
            }`
      );

      // 401: Unauthorized control
      if (action.payload.status == 401) {
        api.dispatch(logout());
        window.location.replace("/login");
      }
    }

    return next(action);
  };
