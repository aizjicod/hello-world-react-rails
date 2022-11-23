class MessagesController < ApplicationController
  # GET /messages or /messages.json
  def random
    messages = Message.all.sample
    p messages
    render json: messages
  end
end
