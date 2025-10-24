import type { ButtonBannerProps } from "./types"

export const ButtonBanner = ({ label, href }: ButtonBannerProps) => {
    return (
        <a href={href} rel="noopener refferer" target="_blank" className="block w-full bg-[#333333] h-10 text-sm font-semibold text-white hover:bg-neutral-600 rounded-md text-center place-content-center">
            {label}
        </a>
    )
}

