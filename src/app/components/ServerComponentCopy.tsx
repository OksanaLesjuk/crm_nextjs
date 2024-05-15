import React from 'react'
export interface ServerComponentProps{
children?: React.ReactNode,
}

export default function ServerComponentCopy({children}: ServerComponentProps ) {
    console.log("ServerComponent");
  return (
    <div>
     <span>Server Component</span>
      {children}
    </div>
  )
}
