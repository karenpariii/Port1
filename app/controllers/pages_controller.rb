# app/controllers/pages_controller.rb
class PagesController < ApplicationController
  def home
  end

  def about
  end

  def skills
  end

  def timeline
  end

  def projects
  end

  def contact
  end


  def contact_submit
    @name = params[:nom]
    @message = params[:message]
    @user_email = params[:email]

    # Envoyer l'email avec les paramètres correctement définis
    ContactMailer.with(name: @name, message: @message, user_email: @user_email).send_contact_email.deliver_now

    flash[:notice] = 'Message envoyé.'
    redirect_to '/pages/home'

  rescue StandardError => e
    logger.error "Erreur lors de l'envoi de l'email : #{e.message}"
    flash[:alert] = "Désolé, une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard."
    redirect_to '/pages/home'
  end

  private
  def contact_params
    params.permit(:nom, :email, :message)
  end
end
