'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import {
  SpotifyIcon,
  TiktokIcon,
  PiFacebookIcon,
  PinterestIcon,
  EtsyIcon,
  GlobeSimpleIcon
  // LinkedInIcon,
  // YouTubeIcon,
  // FacebookIcon,
} from '@/components/SocialIcons'
import { Satisfy } from 'next/font/google'
import { FreeTrialBanner } from '@/components/FreeTrial'
import WithMeLogo from '@/images/photos/withmelogo.png'
import Amanda_img from '../images/photos/Amanda_img.png'
import Profit_img from '../images/photos/Profit_img.webp'
import Insta_profit_img from '../images/photos/Insta_profit_img.webp'
import Millionaire_img from '../images/photos/Millionaire_img.webp'
import Ready_img from '../images/photos/Ready_learn_img.webp'
import Admiring_img from '../images/photos/Admiring_chibi.webp'
import Adorable_img from '../images/photos/Adorable_chibi_img.webp'
import Cozy_img from '../images/photos/Cozy_PJ_img.webp'
import Easter_img from '../images/photos/Easter_clip_img.webp'
// import MealPlan from '../images/photos/meal_plan.webp'

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link
      className="group -m-1 transform p-1 transition-transform hover:scale-110"
      {...props}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="h-6 w-6 fill-white transition group-hover:fill-white/80" />
    </Link>
  )
}

function LinkBox({
  icon: Icon,
  title,
  description,
  href,
  image,
}: {
  icon?: React.ComponentType<{ className?: string }>
  title: string
  description?: string
  href: string
  image?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
    >
      <div className="flex flex-1 items-center gap-4">
        {image ? (
          <div className="aspect-square h-12 w-12 min-w-[3rem] overflow-hidden rounded-xl">
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ) : (
          Icon && (
            <div className="flex aspect-square h-12 w-12 min-w-[3rem] items-center justify-center rounded-xl bg-white/5 p-2">
              <Icon className="h-6 w-6" />
            </div>
          )
        )}
        <div className="text-left">
          <h2 className="pr-6 text-xs font-bold text-white">{title}</h2>
          {description && (
            <p className="mt-0.5 text-xs text-white/80">{description}</p>
          )}
        </div>
      </div>
      <svg
        className="h-4 w-4 flex-shrink-0 text-white/70"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </a>
  )
}

export default function Home() {
  const socialLinks = [
    {
      href: 'https://open.spotify.com/show/1uIuaf3aY6z3x39AzSQHYO?si=OmQu6NhmTPSdJuaOREoy7Q&nd=1&dlsi=b6da02db411b49c0',
      icon: SpotifyIcon,
    },
    {
      href: 'https://tiktok.com/@amandadigitalmarketing',
      icon: TiktokIcon,
    },
    {
      href: 'https://www.facebook.com/amanda.white.856685/',
      icon: PiFacebookIcon,
    },
    {
      href: 'https://www.pinterest.com/mandersofficial0986/_created/',
      icon: PinterestIcon,
    },
    {
      href: 'https://www.etsy.com/shop/mandasdigitalart/?etsrc=sdt',
      icon: EtsyIcon,
    },
    {
      href: 'https://mandersofficial.shop/',
      icon: GlobeSimpleIcon,
    },
    // {
    //   href: 'https://linkedin.com/company/dca-health-coaching',
    //   icon: LinkedInIcon,
    // },
    // {
    //   href: 'https://youtube.com/@DCAHealthCoaching',
    //   icon: YouTubeIcon,
    // },
    // {
    //   href: 'https://facebook.com/dcanutrition',
    //   icon: FacebookIcon,
    // },
  ]

  const linksData = [
    {
      title: 'My Profit System ',
      description: '',
      href: 'https://myprofitfunnel.com/page-2/?ref=MandaWhite&ltclid=189a369b-acb0-453e-9183-7a8233a987ee',
      image: Profit_img,
      icon: null,
    },
    {
      title: 'InstaProfit System',
      description: '',
      href: 'https://instaprofitsystem.com/?ref=amanda58&ltclid=c41e89d2-50e3-48e9-ad67-7f3b5c57f492',
      image: Insta_profit_img,
      icon: null,
    },
    {
      title: 'Millionaire Woman Academy',
      description: '',
      href: 'https://millionairewomanacademy.com/?ref=amanda58&ltclid=4d3bfd0d-5835-416f-8737-96dbff5d3d45',
      image: Millionaire_img,
      icon: null,
    },
    {
      title: 'Ready to learn the right way to use AI? ',
      description: '',
      href: 'https://pillar.io/pomskydigital/checkout/e7021860-1b3b-11f0-8c44-3387b629bc80?ltclid=daa44eb8-80ca-4ca2-9938-e3bf734398c7',
      image: Ready_img,
      icon: null,
    },
    {
      title: 'Digital Wealth Academy 2.0',
      description: '',
      href: 'https://stan.store/affiliates/513c79e5-5246-442a-92be-4789eff137fc?ltclid=bd2ebe76-2072-4e47-8642-b8efc9ac921a',
      image: Profit_img,
      icon: null,
    },
    {
      title: 'Adorable Chibi Girl',
      description: '',
      href: 'https://www.etsy.com/listing/4296749511/adorable-chibi-girl-clipart-bundle-with?ref=shop_home_active_1&pro=1&logging_key=b63a0afcf2db8a581a7ed6bc76294fd81fb38647%3A4296749511',
      image: Admiring_img,
      icon: null,
    },
    {
      title: 'Adorable Admiring Chibi Style Clipart',
      description: '',
      href: 'https://www.etsy.com/listing/1863728339/adorable-admiring-chibi-style-clipart?click_key=b0a71406eb1d507b27d23303ffd70cc290722b8c%3A1863728339&click_sum=f2e9f351&ref=shop_home_feat_1&pro=1',
      image: Adorable_img,
      icon: null,
    },
    {
      title: 'Cozy PJ Coffee Time Chibi Clip Art',
      description: '',
      href: 'https://www.etsy.com/listing/1833169361/cozy-pj-coffee-time-chibi-clip-art?click_key=5935ee23a3dfe0fbd21fe89f035594d8f6299391%3A1833169361&click_sum=565c4fff&ref=shop_home_active_12&pro=1',
      image: Cozy_img,
      icon: null,
    },
    {
      title: 'Cute Easter Bunny',
      description: '',
      href: 'https://www.etsy.com/listing/1857500458/cute-easter-bunny-egg-digital-clip-art?click_key=78aa8a0d321a45efab09e902e7bac18f6ff7a41b%3A1857500458&click_sum=e21cf198&ref=shop_home_feat_2&pro=1',
      image: Easter_img,
      icon: null,
    },
    {
      title: 'With Me',
      description: '',
      href: '',
      image: WithMeLogo,
      icon: null,
    },
  ]

  return (
    <>
      <Container className="flex-1 bg-zinc-950 pb-32">
        <div className="mx-auto max-w-lg text-center">
          <div className="relative w-full">
            <div className="relative">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30dvh] bg-gradient-to-b from-transparent via-transparent to-zinc-950 sm:hidden"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0.95) 75%, #000000 100%)',
                }}
              />
              <div className="mx-auto h-[40dvh] sm:mt-12 sm:h-48 sm:w-40 md:h-72 md:w-64">
                <img
                  src={Amanda_img.src}
                  alt="Founders"
                  className="h-full w-full object-cover object-top sm:rounded-3xl"
                />
              </div>
            </div>

            <div className="relative z-30">
              <h1
                className={`${satisfy.className} -mt-16 mb-4 text-4xl leading-none text-white sm:mt-6 sm:text-5xl`}
              >
                Amanda White

              </h1>
              <p className="mb-8 px-6 text-sm text-white/80">
              Helping online creators save time and effort through AI and Templates.
              </p>

              <div className="mb-12 flex justify-center gap-6">
                {/* <SocialLink href="#" aria-label="Follow on X" icon={XIcon} /> */}
                {socialLinks.map(({ href, icon: Icon }) => (
                  <SocialLink key={href} href={href} icon={Icon} />
                ))}
              </div>

              <div className="space-y-4 px-4">
                {linksData.map(({ title, description, href, image, icon }) => (
                  <LinkBox
                    key={title}
                    title={title}
                    description={description}
                    href={href}
                    {...(icon ? { icon } : {})}
                    {...(image ? { image: image.src } : {})}
                  />
                ))}
              </div>
              <FreeTrialBanner />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
