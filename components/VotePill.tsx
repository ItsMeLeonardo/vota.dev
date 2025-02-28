import { ReactElement } from 'react'
import * as SVG from "components/SVGIcons"

interface VotePillProps {
  image?: string,
  title?: string
  svg?: ReactElement
}

export const VotePill = ({image, title, svg}: VotePillProps) => {
  const getPictureElement = () => {
    if (svg) return svg
    if (image)
      return (
        <img className="object-contain w-10 h-10" alt={title} src={image} />
      )

    return (
      <SVG.Loading className="w-6 h-6 mr-1 animate-spin place-self-center" />
    )
  }

  const pictureElement = getPictureElement()

  return (
    <button className="pointer group">
      <div className="flex flex-row items-center gap-2 px-8 py-3 border border-gray-200 rounded-3xl ">
        <figure className="flex object-contain w-10 h-10">
          {pictureElement}
        </figure>
        <div className="text-2xl font-semibold text-gray-700">{title}</div>
      </div>
    </button>
  )
}