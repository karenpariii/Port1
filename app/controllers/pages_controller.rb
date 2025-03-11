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

    ContactMailer.with(name: @name, message: @message, user_email: @user_email).send_contact_email.deliver_now
  rescue StandardError => e
    logger.error "Erreur lors de l'envoi de l'email : #{e.message}"
    # Afficher un message d'erreur à l'utilisateur
    flash[:alert] = "Désolé, une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer plus tard."
        # Utilisez flash pour définir le message de notification
        flash[:notice] = 'Message envoyé.'
        # Redirigez vers la page d'accueil
        redirect_to '/pages/home'

  end

  private
  def contact_params
    params.permit(:nom, :email, :message)
  end
end
