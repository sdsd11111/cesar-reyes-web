import Image from "next/image"

interface ClientLogoProps {
  name: string
  logo: string
}

export default function ClientLogo({ name, logo }: ClientLogoProps) {
  return (
    <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
      <Image src={logo || "/placeholder.svg"} alt={name} width={120} height={60} className="object-contain" />
    </div>
  )
}
