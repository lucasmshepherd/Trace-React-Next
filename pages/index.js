import Banner from '../components/home/banner.js'
import Block, { Title, Legend } from '../components/content.js'
import Image from 'next/image'
import Placeholder from '../assets/images/placeholder.jpg'

export default function Home() {
  return (
    <>
      <Banner height="540" />
      
      <Block id="slideshow">
        <div className="section-image flex-col-center">
          <Image src={Placeholder} layout="intrinsic" width="500" height="500" />
        </div>
        <div className="section-blurb">
          <Legend>[01.1] About</Legend>
          <Title tag="h1" size="h1" color="#16c1c0">
            I feel more like a nomad than a tourist
          </Title>
          {/* Place any content or html you want in content area */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem.
          </p>
          {/* End of content area */}
        </div>
      </Block>
      
      <Block id="gallery" darken arm>
        <div className="section-blurb">
          <Legend>[02.1] Art</Legend>
          <Title tag="h1" size="h1" color="#00c87d">
          Art is not a thing; it is a way
          </Title>
          {/* Place any content or html you want in content area */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem. Sed sit amet velit risus. Curabitur sit amet vehicula quam. Donec laoreet ante et diam finibus, eu semper arcu tincidunt. Praesent fringilla dui vel neque eleifend volutpat.
          </p>
          {/* End of content area */}
        </div>
        <div className="section-image flex-col-center">
          <div class="gallery-items">
            <Image src={Placeholder} layout="intrinsic" width="250" height="250" />
            <Image src={Placeholder} layout="intrinsic" width="250" height="250" />
            <Image src={Placeholder} layout="intrinsic" width="250" height="250" />
            <Image src={Placeholder} layout="intrinsic" width="250" height="250" />
          </div>
        </div>
      </Block>
    </>
  )
}
