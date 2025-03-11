
class ContactMailer < ApplicationMailer
  default to: 'kklamalice@hotmail.fr' 
# Destinataire fixe

def send_contact_email
  @nom = params[:nom]
  @message = params[:message]
  @user_email = params[:email]
  
  mail(from: @user_email, subject: "Nouveau message de #{@nom}")
end
end