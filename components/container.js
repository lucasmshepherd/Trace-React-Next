export default function Container(props) {
  return (
    <div className="container">
        {props.children}
    </div>
  )
}

export function PageContainer(props) {
  return (
    <div className="page">
        {props.children}
    </div>
  )
}