import Banner from '../components/index/banner.js'
import Block, { Faq, FaqItem, Title, Legend, BlockFeatures, BlockFeaturesItem, BlockFeaturesItemContent, BlockList, BlockListItem, Divider, Planets, Planet } from '../components/content.js'
import { NomadProfiles } from '../components/nomads.js'
import Branding from '../components/branding.js'
import SocialLink from '../components/social-link.js'
import Image from 'next/image'
import Placeholder from '../assets/images/placeholder.jpg'
import ArtImage1 from '../assets/images/art-features-1.png'
import ArtImage2 from '../assets/images/art-features-2.png'
import ArtImage3 from '../assets/images/art-features-3.png'
import ArtImage4 from '../assets/images/art-features-4.png'
import Nomad1 from '../assets/images/nomad1.png'
import Nomad2 from '../assets/images/nomad2.png'
import Nomad3 from '../assets/images/nomad3.png'
import Narr1 from '../assets/images/narrative-icon01.png'
import Narr2 from '../assets/images/narrative-icon02.png'
import HexLogo from '../assets/images/hex-code-crew-logo.png'
import Nomad4 from '../assets/images/bio1.png'
import Nomad5 from '../assets/images/bio2.png'
import Nomad6 from '../assets/images/bio3.png'
import BannerBG from '../assets/images/banner-bottom.jpg'
import Planet1 from '../assets/images/Planet1.png'
import Planet2 from '../assets/images/Planet2.png'
import Planet3 from '../assets/images/Planet3.png'
import Planet4 from '../assets/images/Planet4.png'
import Planet5 from '../assets/images/Planet5.png'

export default function Home() {
  return (
    <>
      <Banner height="540" />
      
      <Block id="about">
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
      
      <Block id="art" darken arm>
        <div className="section-items">
          <Legend>[02.1] Art</Legend>
          <Title tag="h2" size="h2" color="#00c87d">
            Art is not a thing; it is a way
          </Title>
          {/* Place any content or html you want in content area */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem. Sed sit amet velit risus. Curabitur sit amet vehicula quam. Donec laoreet ante et diam finibus, eu semper arcu tincidunt. Praesent fringilla dui vel neque eleifend volutpat.
          </p>
          {/* End of content area */}
        </div>
        <div className="section-image flex-col-center">
          <div className="gallery-items">
            <Image src={Placeholder} layout="intrinsic" width="250" height="250" />
            <Image src={Placeholder} layout="intrinsic" width="250" height="250" />
            <Image src={Placeholder} layout="intrinsic" width="250" height="250" />
            <Image src={Placeholder} layout="intrinsic" width="250" height="250" />
          </div>
        </div>
      </Block>

      <Block id="blocklister" vertical>
        <BlockFeatures>

          <BlockFeaturesItem>
            <Image src={ArtImage1} layout="intrinsic" width="148" height="148" />
            <BlockFeaturesItemContent>
              <Title tag="h3" size="h5" color="#00c87d">
                Feature 1
              </Title>
              <Divider />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida diam.
            </BlockFeaturesItemContent>
          </BlockFeaturesItem>
          
          <BlockFeaturesItem>
            <Image src={ArtImage2} layout="intrinsic" width="148" height="148" />
            <BlockFeaturesItemContent>
              <Title tag="h3" size="h5" color="#00c87d">
                Feature 2
              </Title>
              <Divider />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida diam.
            </BlockFeaturesItemContent>
          </BlockFeaturesItem>

          <BlockFeaturesItem>
            <Image src={ArtImage3} layout="intrinsic" width="148" height="148" />
            <BlockFeaturesItemContent>
              <Title tag="h3" size="h5" color="#00c87d">
                Feature 3
              </Title>
              <Divider />
              Consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida diam.
            </BlockFeaturesItemContent>
          </BlockFeaturesItem>

          <BlockFeaturesItem>
            <Image src={ArtImage4} layout="intrinsic" width="148" height="148" />
            <BlockFeaturesItemContent>
              <Title tag="h3" size="h5" color="#00c87d">
                Feature 4
              </Title>
              <Divider />
              Dolor sit amet, consectetur adipiscing elit.
            </BlockFeaturesItemContent>
          </BlockFeaturesItem>

        </BlockFeatures>
        <BlockList>
          
          <BlockListItem>
            <div className="section-image flex-col-end">
              <Image src={Nomad1} layout="intrinsic" width="500" height="500" />
            </div>
            <div className="section-blurb flex-col-center">
              <Legend>[Level 1]</Legend>
              <Title tag="h3" size="h2" color="#00c87d">
                Headline
              </Title>
              {/* Place any content or html you want in content area */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum.
              </p>
              {/* End of content area */}
            </div>
          </BlockListItem>
          
          <BlockListItem>
            <div className="section-image flex-col-end">
              <Image src={Nomad2} layout="intrinsic" width="500" height="500" />
            </div>
            <div className="section-blurb flex-col-center">
              <Legend>[Level 2]</Legend>
              <Title tag="h3" size="h2" color="#00c87d">
                Headline 2
              </Title>
              {/* Place any content or html you want in content area */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum.
              </p>
              {/* End of content area */}
            </div>
          </BlockListItem>
          
          <BlockListItem>
            <div className="section-image flex-col-end">
              <Image src={Nomad3} layout="intrinsic" width="500" height="500" />
            </div>
            <div className="section-blurb flex-col-center">
              <Legend>[Level 3]</Legend>
              <Title tag="h3" size="h2" color="#00c87d">
                Headline 3
              </Title>
              {/* Place any content or html you want in content area */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum.
              </p>
              {/* End of content area */}
            </div>
          </BlockListItem>

        </BlockList>
      </Block>

      <Block id="world" darken tailcut>
        <div className="section-blurb">
          <Legend>[03.1] World</Legend>
          <Title tag="h1" size="h1" color="#7b30ed">
            Suspendisse vel semper augue
          </Title>
          {/* Place any content or html you want in content area */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem.
          </p>
          {/* End of content area */}
        </div>
        <div className="section-image flex-col-center">
          <Block>
            <BlockFeatures>

              <BlockFeaturesItem>
                <Image src={Narr1} layout="intrinsic" width="148" height="148" />
                <BlockFeaturesItemContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida diam.
                </BlockFeaturesItemContent>
              </BlockFeaturesItem>
              
              <BlockFeaturesItem>
                <Image src={Narr2} layout="intrinsic" width="148" height="148" />
                <BlockFeaturesItemContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida diam.
                </BlockFeaturesItemContent>
              </BlockFeaturesItem>

            </BlockFeatures>
          </Block>
        </div>
      </Block>

      <Block id="faq1" vertical darken buzzcut wyrm>
          <Title tag="h3" size="h2" color="#7b30ed">
            Consectetur adipiscing elit:
          </Title>
          <Faq>
            
            <FaqItem>
              <Title tag="h3" size="h5" color="#7b30ed" accordion>
                Lorem ipsum dolor sit amet, consectetur adipiscing?
              </Title>
              <Block default>
                <div className="section-image flex-col-center">
                  <Image src={Placeholder} layout="intrinsic" width="300" height="300" />
                </div>
                <div className="section-blurb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem.</p>
                </div>
              </Block>
            </FaqItem>
            
            <FaqItem>
              <Title tag="h3" size="h5" color="#7b30ed" accordion>
                Suspendisse vel semper?
              </Title>
              <Block default>
                <div className="section-image flex-col-center">
                  <Image src={Placeholder} layout="intrinsic" width="300" height="300" />
                </div>
                <div className="section-blurb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem.</p>
                </div>
              </Block>
            </FaqItem>
            
            <FaqItem>
              <Title tag="h3" size="h5" color="#7b30ed" accordion>
                Praesent euismod ipsum lorem, a rhoncus sapien dictum ac?
              </Title>
              <Block default>
                <div className="section-image flex-col-center">
                  <Image src={Placeholder} layout="intrinsic" width="300" height="300" />
                </div>
                <div className="section-blurb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem.</p>
                </div>
              </Block>
            </FaqItem>

          </Faq>
      </Block>

      <Block id="mission" dark wide city>
        <Legend light>[04.1] Mission</Legend>
        <Title tag="h3" size="h2" color="#16c1c0">
          Rhoncus sapien dictum ac
        </Title>
        <p class="light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis risus non augue varius semper eu a eros.
          Mauris ut enim ut nisi imperdiet ornare a et nunc. Quisque sed purus varius nisi imperdiet pulvinar vitae et
          mauris. Cras malesuada mattis risus, ac molestie ante consectetur ac. Sed molestie efficitur laoreet. Fusce
          vehicula faucibus scelerisque. Ut ullamcorper magna porttitor, pharetra lorem non, mollis leo.
        </p>
        <p class="light">
          Quisque sit amet arcu non lectus accumsan suscipit ut in erat. Duis id interdum odio, vitae pharetra velit.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dapibus augue sit
          amet velit tincidunt pellentesque. Phasellus ultricies aliquet auctor. Mauris tortor est, suscipit ac eleifend id,
          iaculis at felis. Pellentesque laoreet erat accumsan, laoreet ligula eget, sollicitudin tortor.
        </p>
        <Title tag="h3" size="h2" color="#16c1c0">
          Imperdiet ornare
        </Title>
        <p class="light skinny">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis risus non augue varius semper eu a eros.
          Mauris ut enim ut nisi imperdiet ornare a et nunc. Quisque sed purus varius nisi imperdiet pulvinar vitae et
          mauris. Cras malesuada mattis risus, ac molestie ante consectetur ac. Sed molestie efficitur laoreet. Fusce
          vehicula faucibus scelerisque. Ut ullamcorper magna porttitor, pharetra lorem non, mollis leo.
        </p>

        <Planets>
          <BlockFeatures>

            <BlockFeaturesItem>
              <Image src={Planet1} layout="intrinsic" width="214" height="183" />
              <BlockFeaturesItemContent>
                  <Title tag="h3" size="h5" color="#15c1c0">
                    Planet 1
                  </Title>
                  <Divider />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum mauris.
                </BlockFeaturesItemContent>
              </BlockFeaturesItem>

            <BlockFeaturesItem>
              <Image src={Planet2} layout="intrinsic" width="157" height="155" />
              <BlockFeaturesItemContent>
                  <Title tag="h3" size="h5" color="#15c1c0">
                    Planet 2
                  </Title>
                  <Divider />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum mauris id posuere gravida.
                </BlockFeaturesItemContent>
              </BlockFeaturesItem>

            <BlockFeaturesItem>
              <Image src={Planet3} layout="intrinsic" width="168" height="169" />
              <BlockFeaturesItemContent>
                  <Title tag="h3" size="h5" color="#15c1c0">
                    Planet 3
                  </Title>
                  <Divider />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum mauris id posuere gravida. Praesent libero tellus, efficitur eu diam in, cursus accumsan nisl. Nunc vestibulum lacus non dui scelerisque.
                </BlockFeaturesItemContent>
              </BlockFeaturesItem>

            <BlockFeaturesItem>
              <Image src={Planet4} layout="intrinsic" width="320" height="166" />
              <BlockFeaturesItemContent>
                  <Title tag="h3" size="h5" color="#15c1c0">
                    Planet 4
                  </Title>
                  <Divider />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum mauris id posuere gravida. Praesent libero tellus, efficitur eu diam in, cursus accumsan nisl. Nunc vestibulum lacus non dui scelerisque, ut fermentum quam blandit. Morbi tempor malesuada nisl consequat sodales.
                </BlockFeaturesItemContent>
              </BlockFeaturesItem>

            <BlockFeaturesItem>
              <Image src={Planet5} layout="intrinsic" width="196" height="197" />
              <BlockFeaturesItemContent>
                  <Title tag="h3" size="h5" color="#15c1c0">
                    Planet 5
                  </Title>
                  <Divider />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida diam.
                </BlockFeaturesItemContent>
              </BlockFeaturesItem>

          </BlockFeatures>
        </Planets>

      </Block>

      <Block id="team" darken wide harpoon>
        <Legend>[05.1] Team</Legend>
        <Title tag="h2" size="h2" color="#006ec8">
          Headline goes here
        </Title>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum mauris
          id posuere gravida. Praesent libero tellus, efficitur eu diam in, cursus accumsan nisl.
          Nunc vestibulum lacus non dui scelerisque, ut fermentum quam blandit. Morbi tempor
          malesuada nisl consequat sodales.
        </p>
        <NomadProfiles>

          <div className="no-pro-item">
            <Image src={Nomad4} layout="intrinsic" width="203" height="203" />
            <div className="no-pro-item-excerpt">
              <Title tag="h4" size="h6" color="#006ec8">
                Gene Yuss
              </Title>
              <Divider />
              <strong>Desert Gunner</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at turpis pellentesque.</p>
            </div>
          </div>

          <div className="no-pro-item">
            <Image src={Nomad5} layout="intrinsic" width="203" height="203" />
            <div className="no-pro-item-excerpt">
              <Title tag="h4" size="h6" color="#006ec8">
                Drew Peanuts
              </Title>
              <Divider />
              <strong>Mercenary</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at turpis pellentesque.</p>
            </div>
          </div>

          <div className="no-pro-item">
            <Image src={Nomad6} layout="intrinsic" width="203" height="203" />
            <div className="no-pro-item-excerpt">
              <Title tag="h4" size="h6" color="#006ec8">
                Larry
              </Title>
              <Divider />
              <strong>Bike Gang Member</strong>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at turpis pellentesque.</p>
            </div>
          </div>

          <div className="no-pro-item">
            <Image src={HexLogo} layout="intrinsic" width="203" height="203" />
          </div>

        </NomadProfiles>
      </Block>

      <Block id="faq" vertical drog>
      <Legend>[06.1] FAQ</Legend>
          <Title tag="h3" size="h2" color="#92c820">
            Got questions?
          </Title>
          <Faq>
            
            <FaqItem>
              <Title tag="h3" size="h5" color="#92c820" accordion>
                What is that thing to the right?
              </Title>
              <Block default>
                <p><i>Draconis Anura.</i>  A Dragon Frog, of course.</p>
              </Block>
            </FaqItem>
            
            <FaqItem>
              <Title tag="h3" size="h5" color="#92c820" accordion>
                Suspendisse vel semper?
              </Title>
              <Block default>
                <div className="section-image flex-col-center">
                  <Image src={Placeholder} layout="intrinsic" width="300" height="300" />
                </div>
                <div className="section-blurb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem.</p>
                </div>
              </Block>
            </FaqItem>
            
            <FaqItem>
              <Title tag="h3" size="h5" color="#92c820" accordion>
                Praesent euismod ipsum lorem?
              </Title>
              <Block default>
                <div className="section-image flex-col-center">
                  <Image src={Placeholder} layout="intrinsic" width="300" height="300" />
                </div>
                <div className="section-blurb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem.</p>
                </div>
              </Block>
            </FaqItem>
            
            <FaqItem>
              <Title tag="h3" size="h5" color="#92c820" accordion>
                Praesent euismod ipsum lorem?
              </Title>
              <Block default>
                <div className="section-image flex-col-center">
                  <Image src={Placeholder} layout="intrinsic" width="300" height="300" />
                </div>
                <div className="section-blurb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem.</p>
                </div>
              </Block>
            </FaqItem>
            
            <FaqItem>
              <Title tag="h3" size="h5" color="#92c820" accordion>
                Praesent euismod ipsum lorem?
              </Title>
              <Block default>
                <div className="section-image flex-col-center">
                  <Image src={Placeholder} layout="intrinsic" width="300" height="300" />
                </div>
                <div className="section-blurb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem.</p>
                </div>
              </Block>
            </FaqItem>
            
            <FaqItem>
              <Title tag="h3" size="h5" color="#92c820" accordion>
                Praesent euismod ipsum lorem?
              </Title>
              <Block default>
                <div className="section-image flex-col-center">
                  <Image src={Placeholder} layout="intrinsic" width="300" height="300" />
                </div>
                <div className="section-blurb">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel semper augue. Sed porta commodo gravida. Donec non sem a justo euismod dapibus sed non urna. Praesent euismod ipsum lorem, a rhoncus sapien dictum ac. Cras a aliquet lorem.</p>
                </div>
              </Block>
            </FaqItem>

          </Faq>
      </Block>

      <div className="cta-block light align-center" style={{ backgroundImage: `url(${BannerBG.src})`}}>
        <h5 className="cta-title">
          Join the Club
        </h5>
        <Branding social>
          <SocialLink profile="Twitter" icon="50" area="90" />
          <SocialLink profile="Discord" icon="50" area="90" />
        </Branding>
      </div>
    </>
  )
}
