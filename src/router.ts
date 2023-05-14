// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `///`
  | `/403`
  | `/login`
  | `/users`
  | `/users/:id`

export type Params = {
  '/users/:id': { id: string }
}

export type ModalPath = `/modals/example`

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
