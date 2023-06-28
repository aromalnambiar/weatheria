'use client'

import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid"
import Typewriter from "typewriter-effect";

type Props = {
    message: string;
}

function GptCard({message}: Props) {
  return (
    <div className="callout z-10 shadow">
        <div className="callout-icon">
            <CheckCircleIcon className="icon" />
        </div>
        <p className="callout-title" >
          <Typewriter
              options={{
                strings: [message],
                autoStart: true,
                loop: true,
              }}
            />
        </p>
</div>

  )
}

export default GptCard