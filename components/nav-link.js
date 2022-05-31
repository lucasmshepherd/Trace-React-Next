export default function navLink(props) {
  const url = props.url
  const title = props.title
  let featured
  if( props.featured ) { featured = "feature-link disabled" }
  return (
    <>
      <a href={url} className={featured}>
        {title}
      </a>
    </>
  )
}