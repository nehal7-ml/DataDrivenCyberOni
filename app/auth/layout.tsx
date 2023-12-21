import Image from "next/image";

function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (

        <div className="h-screen">
            {children}
        </div>
    );
}

export default AuthLayout;