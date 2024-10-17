const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className="bg-primary">
      <p className="px-3 py-4 text-center">All rights reserved {year} Make You Pixel, Inc.</p>
    </footer>
  )
}

export default Footer
