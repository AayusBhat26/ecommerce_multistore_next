export default function AuthLayout({
      children
}:{
      children:React.ReactNode
}){
     return (
      <div className="flex items-center justify-center h-full">{children}</div>
     ) 
}
// this file is responsible for the layout of entire auth page