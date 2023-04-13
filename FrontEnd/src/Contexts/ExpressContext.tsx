import { ReactNode,createContext, useContext, } from 'react'

interface Expressvalue{
    api:string,
    [key:string]:string
}

const ExpressContext = createContext<Expressvalue|null>(null)

export function useExpress(){
    return useContext(ExpressContext)
}

export function ExpressProvider({children}:{children:ReactNode}) {
  
    const value:Expressvalue={
        api:'http://localhost:8080/',
        fetch:'fetchMessCutbyID',
        update:'updateMessCutbyID'
    }

    return (
    <ExpressContext.Provider value={value}>
        <>{children}</>
    </ExpressContext.Provider>
  )
}
