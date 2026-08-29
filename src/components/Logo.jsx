export default function Logo({ width = 280 }) {
  return (
    <svg
      viewBox="0 0 420 140"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bloc GBI - fond noir */}
      <rect x="0" y="0" width="230" height="140" fill="#1a1a1a" />
      {/* Bloc TRANS - fond jaune, léger décalage pour créer une séparation nette */}
      <rect x="234" y="0" width="186" height="140" fill="#FFC700" />

      {/* Texte GBI - centré verticalement dans son bloc */}
      <text
        x="20"
        y="72"
        dominantBaseline="middle"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="900"
        fontSize="50"
        fill="#FFC700"
        letterSpacing="2"
      >
        GB
      </text>

      <text
        x="145"
        y="72"
        dominantBaseline="middle"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="900"
        fontSize="50"
        fill="#FFC700"
      >
        I
      </text>
      {/* Chevron repositionné au-dessus du I, mieux aligné et proportionné */}
      <polygon
        points="147,22 163,32 147,42 152,32"
        fill="#FFC700"
      />

      {/* Texte TRANS - centré dans son bloc jaune */}
      <text
        x="247"
        y="72"
        dominantBaseline="middle"
        fontFamily="Montserrat, Arial, sans-serif"
        fontWeight="900"
        fontSize="36"
        fill="#1a1a1a"
        letterSpacing="1"
      >
        TRANS
      </text>

      {/* Tagline - alignée sous GBI, avec plus d'air par rapport au texte principal */}
      <text
        x="20"
        y="108"
        fontFamily="Poppins, Arial, sans-serif"
        fontWeight="500"
        fontSize="11"
        letterSpacing="1.2"
        fill="#FFC700"
        opacity="0.85"
      >
        TRANSIT · LOGISTIQUE · INTERNATIONAL
      </text>
    </svg>
  );
}