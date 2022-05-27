export default function navLink(props) {
  const url = props.url
  const title = props.title
  let disabled
  if( props.disabled ) { disabled = "feature-link disabled" }
  return (
    <>
      <a href={url} className={disabled}>
        {title}
      </a>
    </>
  )
}