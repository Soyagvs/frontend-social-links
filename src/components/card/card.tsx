import { ButtonBanner } from '../button-banner/button-banner'
import Avatar from '/images/avatar.jpg'

export const Card = () => {
    return (
        <div className="w-[22em] bg-[#1F1F1F] rounded-xl flex flex-col items-center p-10 gap-4">
            <img src={Avatar} alt="Avatar imagen" className='size-20 rounded-full' />
            <div className='flex flex-col justify-center items-center gap-1'>
                <h2 className='text-white text-2xl font-semibold'>Agustin Martinez</h2>
                <p className='text-lime-300 font-medium text-sm'>Buenos Aires, Argentina</p>
            </div>
            <p className='text-neutral-300 text-xs text-center'>"Full stack developer"</p>
            <div className='w-full gap-3 flex flex-col'>
                <ButtonBanner label='Github' href='https://github.com/Soyagvs'/>                
                <ButtonBanner label='Instagram' href='https://www.instagram.com/soyagvs' />
                <ButtonBanner label='Youtube' href='https://www.youtube.com/@soyagvs' />
                <ButtonBanner label='Frontend Mentor' href='https://www.frontendmentor.io/profile/Soyagvs' />
                <ButtonBanner label='Twitter' href='https://x.com/soyagvs' />
            </div>
        </div>
    )
}
