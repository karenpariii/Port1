# app/mailers/application_mailer.rb
class ApplicationMailer < ActionMailer::Base
  default from: 'karendev184@gmail.com'
  layout 'mailer'
end
