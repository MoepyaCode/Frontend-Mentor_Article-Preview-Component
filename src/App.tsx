import React from 'react'
import { Assets } from './assets'
import { Container, Main, Wrapper } from './components'

export default function App() {
  const [width, setWidth] = React.useState(window.innerWidth)
  const [isShareClicked, setIsShareClicked] = React.useState(false)
  const isMobile = width < 640

  React.useLayoutEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  function onShareClick() {
    setIsShareClicked(true)
  }

  function onOutsideClick() {
    setIsShareClicked(false)
  }

  function shareClickContent() {
    if (isMobile && isShareClicked) {
      return (
        <Wrapper className='flex flex-nowrap items-center gap-[21px]'>
          <span className='text-[13px] text-[#9DAEC2] tracking-[5px] leading-[20px] '>SHARE</span>
          <Wrapper className='flex nowrap gap-[16px]'>
            <img src={Assets.iconFacebook} alt="" />
            <img src={Assets.iconTwitter} alt="" />
            <img src={Assets.iconPinterest} alt="" />

          </Wrapper>
        </Wrapper>
      )
    } else if (!isMobile && isShareClicked) {
      return (
        <React.Fragment>
          <Wrapper className='flex flex-nowrap items-center gap-[16px]'>
            <img className='rounded-full w-[40px] aspect-square object-contain' src={Assets.avatarMichelle} alt="" />
            <Wrapper>
              <h2 className='text-[#48556A] font-bold text-[13px] leading-[20px] tracking-[0.12px]'>Michelle Appleton</h2>
              <p className='text-[#9DAEC2] text-[13px] leading-[20px] tracking-[0.12px]'>28 Jun 2020</p>
            </Wrapper>
          </Wrapper>
          <Wrapper className='absolute left-[64%] bottom-[calc(150%+12px)] bg-[#48556A] flex flex-nowrap justify-center items-center gap-[21px] w-[248px] h-[67px] rounded-[10px] after:absolute after:top-[calc(50%+1px)] after:-rotate-[135deg] after:border-t-[24px] after:border-t-[#48556A] after:border-b-[24px] after:border-b-transparent after:border-r-[24px] after:border-r-transparent'>
            <span className='text-[13px] text-[#9DAEC2] tracking-[5px] leading-[20px] '>SHARE</span>
            <Wrapper className='flex nowrap gap-[16px]'>
              <img src={Assets.iconFacebook} alt="" />
              <img src={Assets.iconTwitter} alt="" />
              <img src={Assets.iconPinterest} alt="" />

            </Wrapper>
          </Wrapper>
        </React.Fragment>
      )
    }

    return (
      <Wrapper className='flex flex-nowrap items-center gap-[16px]'>
        <img className='rounded-full w-[40px] aspect-square object-contain' src={Assets.avatarMichelle} alt="" />
        <Wrapper>
          <h2 className='text-[#48556A] font-bold text-[13px] leading-[20px] tracking-[0.12px]'>Michelle Appleton</h2>
          <p className='text-[#9DAEC2] text-[13px] leading-[20px] tracking-[0.12px]'>28 Jun 2020</p>
        </Wrapper>
      </Wrapper>
    )
  }

  return (
    <Main className='grid place-items-center min-w-full bg-[#ECF2F8] pt-[74px] px-[24px] pb-[81px]'>
      <Container className=' bg-white flex flex-col md:flex-row md:items-center flex-nowrap rounded-[10px] w-full max-w-[730px] max-h-[512px] md:max-h-[280px] shadow-[0_40px_40px_-10px_rgba(201,213,225,0.5034)] '>
        <img className='rounded-t-[10px] md:rounded-t-none md:rounded-l-[10px] w-full h-[200px]  md:max-w-[285px] md:h-[280px]' src={Assets.drawers} alt="" />

        <Wrapper className='overflow-y-auto xs:overflow-visible relative flex flex-col flex-nowrap md:gap-[20px] md:px-[40px] md:h-[216px]'>
          <Wrapper className='px-[32px] pt-[36px] pb-[20px] md:p-0 flex flex-col gap-[12px]'>
            <h1 className='md:text-[20px] text-[#48556A] leading-[24px] md:leading-[28px] tracking-[0.2px] md:tracking-[0.25px] font-bold'>
              Shift the overall look and feel by adding these wonderful touches to furniture in your home
            </h1>

            <p className='text-[#6E8098] text-[13px] font-medium leading-[20px] tracking-[0.12px] '>
              Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.
            </p>
          </Wrapper>

          <Wrapper className={`${(isMobile && isShareClicked) ? 'bg-[#48556A]' : ''} relative h-[64px] md:h-[40px] px-[32px] py-[16px] md:p-0 flex flex-nowrap justify-between items-center`}>
            {shareClickContent()}
            <button onClick={onShareClick} onBlur={onOutsideClick} className={`${isShareClicked ? 'bg-[#6E8098] right-0' : 'bg-[#ECF2F8]'} w-[32px] aspect-square rounded-full grid place-items-center`}>
              <svg className={isShareClicked ? 'fill-white' : 'fill-[#6E8098]'} xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z" /></svg>
            </button>
          </Wrapper>
        </Wrapper>
      </Container>
    </Main>
  )
}