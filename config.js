module.exports = {
  brew: [
    // http://conqueringthecommandline.com/book/ack_ag
    'ack',
    'ag',
    'antigen',
    'assume-role',
    'awscli',
    'chromedriver',
    // Install GNU core utilities (those that come with OS X are outdated)
    // Don’t forget to add `$(brew --prefix coreutils)/libexec/gnubin` to `$PATH`.
    'coreutils',
    'dos2unix',
    // Install GNU `find`, `locate`, `updatedb`, and `xargs`, `g`-prefixed
    'findutils',
    'fortune',
    'gawk',
    // http://www.lcdf.org/gifsicle/ (because I'm a gif junky)
    'gifsicle',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed --with-default-names',
    // better, more recent grep
    'homebrew/dupes/grep',
    // https://github.com/jkbrzt/httpie
    'httpie',
    'imagemagick',
    //'imagesnap',
    // jq is a sort of JSON grep
    'jq',
    'mongodb',
    // Install some other useful utilities like `sponge`
    'moreutils',
    'nmap',
    'openconnect',
    'qt@5.5',
    'reattach-to-user-namespace',
    'redis',
    // better/more recent version of screen
    'homebrew/dupes/screen',
    'terraform',
    'terraform_landscape',
    'tmux',
    'tree',
    'ttyrec',
    // better, more recent vim
    'vim --with-override-system-vi',
    'watch',
    // Install wget with IRI support
    'wget --enable-iri'
  ],
  cask: [
    'gpgtools',
    'slack',
    'caffeine',
    'the-unarchiver',
    'little-snitch',
    'micro-snitch',
    'kaleidoscope',
    'appcleaner',
    'transmit',
    'daisydisk',
    'xquartz',
    'keybase',
    'tresorit'
  ],
  gem: [
    'git-up',
    'rubocop'
  ],
  npm: [
    'antic',
    'buzzphrase',
    'eslint',
    'coffeelint',
    'instant-markdown-d',
    'gulp',
    'npm-check',
    'prettyjson',
    'trash',
    'vtop'
  ]
};
