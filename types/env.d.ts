declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_ID: string
      SERVER: string
      TOKEN: string
    }
  }
}
export {}
