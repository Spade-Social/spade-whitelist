export default function SpadeHead() {
    return(
        <div className='flex items-center justify-center'>
            {
              //we're not using <Image /> on purpose
            }
            <img src="/logo.png" layout='intrinsic' alt='Spade Logo' className='w-12 lg:w-18' />
            <h1 className='text-4xl font-bold tracking-widest text-center text-black lg:text-8xl lg:text-start'>SPADE</h1>
          </div>
    )
}