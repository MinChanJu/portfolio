import { Certificate, Prize } from "."

export type Award = {
  prizes: Prize[];
  certificates: Certificate[];
}