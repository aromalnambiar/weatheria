'use client';

import { Callout } from "@tremor/react";
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/react/solid"
 
type Props = {
    message : string;
    warning? : boolean;
}

function CalloutCard({message, warning} : Props) {
  return (
        <Callout
            className="z-10"
            title={message}
            color={warning? "rose" : "teal"}
            icon={warning? ExclamationIcon: CheckCircleIcon}
        />
  )
}

export default CalloutCard