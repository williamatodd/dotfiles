source /usr/local/share/antigen/antigen.zsh

# Load the oh-my-zsh's library.
antigen use oh-my-zsh

# Bundles from the default repo (robbyrussell's oh-my-zsh).
antigen bundle git
antigen bundle ruby
antigen bundle heroku
antigen bundle pip
antigen bundle lein
antigen bundle command-not-found

# Syntax highlighting bundle.
antigen bundle zsh-users/zsh-syntax-highlighting

# Load the theme.
antigen theme eendroroy/alien-minimal alien-minimal

# Tell Antigen that you're done.
antigen apply

source $(which assume-role)

# AWS ACCOUNT NAME
function aws_account_info {
  [ "$AWS_ACCOUNT_NAME" ] && [ "$AWS_ACCOUNT_ROLE" ] && echo "%F{blue}aws:(%f%F{red}$AWS_ACCOUNT_NAME:$AWS_ACCOUNT_ROLE%f%F{blue})%F$reset_color"
}

# )ofni_tnuocca_swa($ is $(aws_account_info) backwards
PROMPT=`echo $PROMPT | rev | sed 's/ / )ofni_tnuocca_swa($ /'| rev`