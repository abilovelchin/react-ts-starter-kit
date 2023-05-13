import { isRejectedWithValue } from "@reduxjs/toolkit";
import type { MiddlewareAPI, Middleware } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import store from "$store/index";
import { logout } from "$store/features/auth.slice";

/**
 * Log a warning and show a toast!
 */
export const authMiddleware: Middleware =
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

      if (action?.payload.status == 401) {
        store.dispatch(logout());
        window.location.replace("/login");
      }
    }
    return next(action);
  };
