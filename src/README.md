 const { theme, toggleTheme } = useTheme();

  return 

    <section className={`${theme === 'dark' ? 'bg-amber-700 text-white' : 'bg-blue-400'} relative max-w-screen-2xl px-12 sm:px-14 md:px-16 lg:px-40 xl:px-96 `} >

      <div className='fixed top-0 right-0 pt-4 pr-4 z-100'>

        <button
          className="px-4 py-2 rounded text-white"
          onClick={toggleTheme}
        >
          {theme === 'dark' ?
            <LineMdMoonToSunnyOutlineLoopTransition />
            : <LineMdSunnyOutlineToMoonAltLoopTransition />}
        </button>
      </div>


      <CubeAnimation />
      <div className='relative h-40 w-full'>
      </div>


      {/*Home*/}
      <main id='' className='h-auto relative'>

        <h1 className={`${theme === 'dark' ? 'text-titledark' : 'text-white'} font-bold text-4xl font-montserrat pb-2 sm:text-4xl
        md:text-5xl lg:text-5xl xl:text-6xl 
        `}>CARLOS HERNANDEZ</h1>
        <h2 className={`${theme === 'dark' ? 'text-white' : 'text-white'} font-montserrat text-2xl pb-4`}>FULL STACK DEVELOPER</h2>
        <p className='text-white text-xl text-pretty font-extralight pb-4  lg:w-full xl:w-full'>
          Hi, I’m software developer based in Lima, Peru. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between
        </p>

        <div className='flex flex-row gap-x-4 pb-4'>
          <div>
            <button className='bg-white rounded-md w-14 h-14 relative'>
              <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <a href='https://github.com/CarlosHernandezLl' target='_blank' rel='noreferrer'>
                  <DeviconGithub width={40} height={40} />
                </a>
              </div>
            </button>
          </div>
          <div>
            <button className='bg-white rounded-md w-14 h-14 relative'>
              <a href='https://www.linkedin.com/in/carloshernandezll/' target='_blank' rel='noreferrer'>
                <img src={linkedin} alt='linkedin' className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8' />
              </a>
            </button>
          </div>
        </div>
      </main >
      <div className='absolute top-50 right-60 sm:left-96 md:left-96 lg:left-96 xl:right-96'>
        <CubeAnimation />
      </div>
      {/*Project*/}
      <section id='' className='h-auto w-full relative'>

        <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-titledark' : 'text-white'} pt-6  xl:text-3xl`}>PROJECTS</h2>
        <div className='grid grid-cols-1 gap-y-8 pt-8' >
          <AreaCard key='1'
            title='CatchThem'
            description='App can manage thieves and administrate the comisary inclued. This web app can help police stations manage thieves'
            image={fondo3}
            c={
              [
                <DeviconAngular width={20} height={20} />,
                <DeviconSpring width={20} height={20} />,
                <DeviconPostgresql width={20} height={20} />,
                <DeviconGit width={20} height={20} />,
                <DeviconTypescript width={20} height={20} />,
              ]
            } />

        </div>
      </section>

      {/*Skills*/}
      <section id='' className=''>
        <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-titledark' : 'text-white'} pt-6  xl:text-3xl`}>SKILLS</h2>
        <div className='flex flex-col relative justify-center items-center content-center z-10 pt-8'>
          <div className='grid grid-cols-5 gap-y-8 pt-4 gap-4 sm:gap-x-5' >
            <DeviconHtml5 width={40} height={40} />
            <DeviconCss3 width={40} height={40} />
            <DeviconJavascript width={40} height={40} />
            <DeviconTypescript width={40} height={40} />
            <DeviconReact width={40} height={40} />
            <DeviconAngular width={40} height={40} />

            <DeviconJava width={40} height={40} />
            <DeviconPython width={40} height={40} />
            <DeviconCplusplus width={40} height={40} />
            <DeviconSpring width={40} height={40} />

            <DeviconMysql width={40} height={40} />
            <DeviconPostgresql width={40} height={40} />

            <DeviconGit width={40} height={40} />

          </div>
        </div>
      </section>



      {/*Contact*/}

      <section id='contact' className='xl:h-auto relative bg-primary pt-16 xl:pb-24'>
        <h2 className={`text-xl font-bold ${theme === 'dark' ? 'text-titledark' : 'text-white'} pt-6 xl:text-3xl`}>CONTACT</h2>
        <div className='flex flex-col items-center content-cente pt-8 '>
          <ContactForm />
        </div>


      </section>