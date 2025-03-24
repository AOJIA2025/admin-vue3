// types/pinia.d.ts
import 'pinia-plugin-persistedstate'

declare module 'pinia' {
    export interface DefineStoreOptions<Id, S, G, A> {
        persist?: {
            enabled?: boolean
            strategies?: {
                key?: string
                storage?: Storage
                paths?: string[]
            }[]
        }
    }
}