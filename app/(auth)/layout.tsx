export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex justify-center pt-8 h-full">{children}</div>;
}
