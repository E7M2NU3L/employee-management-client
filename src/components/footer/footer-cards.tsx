const FooterCards = ({children} : {
    children : React.ReactNode
}) => {
  return (
    <div className="border rounded-xl w-full h-full relative">
        {children}
    </div>
  )
}

export default FooterCards