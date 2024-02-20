import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Contact Page',
 keywords:['Contact Page','Fernando','Informacion']
};

export default function ContactPage() {
    return (
          <span className="text-5xl">Contact Page</span>
      );
    }