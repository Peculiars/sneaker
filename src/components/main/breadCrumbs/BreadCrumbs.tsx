import React from "react"
import { SlashIcon } from "@radix-ui/react-icons"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator} from "@/components/ui/breadcrumb"
import Link from "next/link"

const Breadcrumbs = ({ path }) => {
    const pathArray = path.split('/').filter(item => item !== '')
    const breadcrumbItems = pathArray.map((item, index) => {
        const href = `/${pathArray.slice(0, index + 1).join('/')}`
        return { href, label: item.charAt(0).toUpperCase() + item.slice(1) }
    })

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <SlashIcon />
                </BreadcrumbSeparator>
                {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={item.href}>
                        <BreadcrumbItem>
                            {index === breadcrumbItems.length - 1 ? (
                                <BreadcrumbPage>{item.label}</BreadcrumbPage>
                            ) : (
                                <Link href={item.href} passHref legacyBehavior>
                                    <BreadcrumbLink>{item.label}</BreadcrumbLink>
                                </Link>
                            )}
                        </BreadcrumbItem>
                        {index < breadcrumbItems.length - 1 && (
                            <BreadcrumbSeparator>
                                <SlashIcon />
                            </BreadcrumbSeparator>
                        )}
                    </React.Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default Breadcrumbs