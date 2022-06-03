import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SocialLink(props) {
  const profile = props.profile
  const icon = props.icon + "px"
  const area = props.area + "px"
  let url, classes, color
  if (profile == "Twitter") {
    url = "https://twitter.com/starnomadsnft"
    classes = "fa-brands fa-twitter";
    color = "#2a9bf0"
  }
  else if (profile == "Discord") {
    url = "https://t.co/fScBbBBh3S";
    classes = "fa-brands fa-discord";
    color= "#6671f5"
  }
  else { url == "#" }

  const linkStyle = {
      width: area,
      height: area,
      lineHeight: area,
      fontSize: icon,
      color: color,
  }

  return (
    <>
      <a href={url} target="_blank" className="social-link" style={linkStyle} title={profile}>
        <FontAwesomeIcon icon={classes} />
      </a>
    </>
  )
}
