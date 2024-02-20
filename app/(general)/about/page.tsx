import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About Page',
 description: 'About Page',
 keywords:['About Page','Fernando','Informacion']
};
export default function AboutPage() {
  return (
      <span className="text-5xl">About Page</span>
  );
}