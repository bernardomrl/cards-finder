interface Icon {
    className: string;
}

export default function RarityIcon({ className }: Icon) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 30">
           <path d="M35.4188 10.0806L27.1063 0.580588C26.9951 0.453649 26.8582 0.351851 26.7046 0.281976C26.5511 0.2121 26.3844 0.175753 26.2156 0.175354H9.59065C9.42193 0.175753 9.25523 0.2121 9.10166 0.281976C8.94809 0.351851 8.81117 0.453649 8.70002 0.580588L0.387523 10.0806C0.1936 10.302 0.0888094 10.5875 0.0934719 10.8818C0.0981344 11.1761 0.211918 11.4582 0.412758 11.6733L17.0378 29.4858C17.1489 29.6049 17.2833 29.6999 17.4327 29.7649C17.5821 29.8298 17.7432 29.8633 17.9061 29.8633C18.069 29.8633 18.2302 29.8298 18.3795 29.7649C18.5289 29.6999 18.6634 29.6049 18.7745 29.4858L35.3995 11.6733C35.5995 11.4574 35.7122 11.175 35.7158 10.8807C35.7193 10.5864 35.6135 10.3013 35.4188 10.0806ZM31.9112 9.67535H25.6219L20.2781 2.55035H25.6768L31.9112 9.67535ZM9.97362 12.0504L14.446 23.2321L4.01088 12.0504H9.97362ZM23.2736 12.0504L17.9031 25.478L12.5327 12.0504H23.2736ZM13.1531 9.67535L17.9031 3.34153L22.6531 9.67535H13.1531ZM25.8327 12.0504H31.7954L21.3603 23.2321L25.8327 12.0504ZM10.1295 2.55035H15.5281L10.1844 9.67535H3.8951L10.1295 2.55035Z"/>
        </svg>
    )
}