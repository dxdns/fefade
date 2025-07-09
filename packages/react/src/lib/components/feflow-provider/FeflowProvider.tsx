import { type ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function ({ children }: Props) {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                    body {
                        background-color: #121212;
                        color: #fefefe;
                    }
                
                    h1 {
                        font-size: 2rem;
                        color: #e67e22;
                    }
                    `
                }}
            />

            {children}
        </>
    )
}