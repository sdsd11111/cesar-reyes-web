import Image from "next/image"

interface TestimonialCardProps {
  quote: string
  author: string
  company: string
  image: string
}

export default function TestimonialCard({ quote, author, company, image }: TestimonialCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{author}</h4>
          <p className="text-gray-600 text-sm">{company}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
    </div>
  )
}
