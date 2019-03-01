source /usr/local/share/antigen/antigen.zsh

antigen bundle zsh-users/zsh-syntax-highlighting
antigen bundle zsh-users/zsh-autosuggestions

# Load the theme.

antigen theme denysdovhan/spaceship-prompt
# Tell Antigen that you're done.
antigen apply

source $(which assume-role)

# AWS ACCOUNT NAME
function aws_account_info {
  [ "$AWS_ACCOUNT_NAME" ] && [ "$AWS_ACCOUNT_ROLE" ] && echo "%F{blue}aws:(%f%F{red}$AWS_ACCOUNT_NAME:$AWS_ACCOUNT_ROLE%f%F{blue})%F$reset_color"
}

# )ofni_tnuocca_swa($ is $(aws_account_info) backwards
PROMPT=`echo $PROMPT | rev | sed 's/ / )ofni_tnuocca_swa($ /'| rev`


autoload -U +X bashcompinit && bashcompinit
complete -o nospace -C /usr/local/bin/mc mc
