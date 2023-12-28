export default async function SearchLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="container mx-auto flex gap-5 xl:gap-10 h-full xl:px-16 px-5">
            
            {children}
        </div>
    );
}
