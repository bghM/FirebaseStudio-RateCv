
interface FooterLink {
    label: string;
    href: string;
}

const footerLinks: FooterLink[] = [
{ label: 'موقع سيرة', href: '#' },
{ label: 'اتصل بنا', href: '#' },
{ label: 'اتفاقية الإستخدام', href: '#' },
{ label: 'إلغاء الاشتراك', href: '#' },
];

export default function EmailFooterLinks() {
return (
    <div className="flex justify-center flex-wrap gap-2 text-[#1F1F1F] text-sm font-medium">
    {footerLinks.map((link, i) => (
        <span key={i} className="flex items-center gap-1">
        {i > 0 && <span className="text-blue-400 text-xs">•</span>}
        <a href={link.href} className="hover:underline">{link.label}</a>
        </span>
    ))}
    </div>
);
}
