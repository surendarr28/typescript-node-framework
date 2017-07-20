import { BaseRoutes as _BaseRoutes } from "./BaseRoutes";
import { BaseService as _BaseService } from "./service/BaseService";
import { BaseController as _BaseController } from "./controller/BaseController";
import { BaseHelper as _BaseHelper } from "./helper/BaseHelper";
import { BaseMiddleware as _BaseMiddleware } from "./middleware/BaseMiddleware";

export namespace Core {
    export const BaseRoutes = _BaseRoutes;
    export const BaseService = _BaseService;
    export const BaseController = _BaseController;
    export const BaseHelper = _BaseHelper;
    export const BaseMiddleware = _BaseMiddleware;
}