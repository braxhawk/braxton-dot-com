import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-svh bg-black text-smoke flex flex-col items-center justify-center px-6">
      <p className="label-mono text-smoke/25 mb-6">[ 404 ]</p>
      <h1 className="font-display text-display-xl text-smoke mb-4 text-center">
        Not Found
      </h1>
      <p className="text-ui-base text-smoke/45 font-light mb-12 text-center max-w-sm">
        This page doesn&apos;t exist in the archive.
      </p>
      <Link
        href="/"
        className="label-mono text-smoke/50 border border-smoke/20 px-6 py-3 hover:bg-smoke hover:text-black transition-all duration-400"
      >
        RETURN HOME
      </Link>
    </div>
  );
}
