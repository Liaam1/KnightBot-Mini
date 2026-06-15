/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU27KqOBD9l7xiHeWmYNWuGkC2VxQVBJ2ahwARw90kIHrKf59iX2afh5lTe95C0+m1evVK/wRFiSlaojsY/wQVwQ1kqDuye4XAGOj1+YwI6IEIMgjGwF20USmv1BOaSBbfBKawRlm4NQ1NxzPHXqbX9Aivw4Jlgxfw7IGqDjIc/qYgFejysqtrR+ZurulHDuOHnsWpXlvLm2HrlpWovSar4IG3L+DZVYSY4CI2qwvKEYHZEt1tiMn36KeaIDY+PopFzNVVG8xzff+qL6LBcWnvRL7/2pwdg1OVmC+/R39izyaPs7md6ntVPyecOFJ2gwl3cCwR3pg8WvK2VeTI5re3d/oUxwWK5hEqGGb3b+tuLRxzYg9p09wyCwXOTh3kM83AZj5CAyULHKqeL1E0ZPk3ia8O3ko43a1gspl47RUrbUNO9fxsU0HqH3TskqT1dkGiuO6vxG3y6ZX0/+guTfHSK879xuxntD7yBj+/HBo1l4RiZawXaACDvr/L78h3v0e/Du2bL8r74VR6lRrOtRcbRVku1nmcXEqxSOnDLEpjWDSe9UUfspr8juWinVZRNvfE/FoSq0ogCZgeb4+KC3cpEaC2aq7HdiN45W1ERF2UZZd73B18WlR36vji6ahplWScBzgRjN1or4jVNtm+vHWUovs8AmP+2QMExZgyAhkuiy42GvUAjJo9Cglib+qC6HCFDlXzq3zsL30XQzl1K07rn1R3mQg3ZlNu9yCqp+bxC+iBipQhohRFM0xZSe4WohTGiILxn3/1QIFa9j63Dk3ke+CMCWVuUVdZCaPPoX7+hGFY1gXb34vQ6A6IgPHgK4wYw0VMOxnrApLwghtkXCCjYHyGGUX/NIgIij5iPUDKurs2L87lbwZgaNZci+N5J9gHXpcdIQZxRruEteCna2tiLiZBo5rTqXaLNSPWwBe/zzm/C5kGM/KKWt519JPEexmPJGPa3+Cpxy2Tkl7KcLZhCPqnZPDyL0U6p62q0T6yRc3Y7R3Bk9AtvPP54R4PTpvBLhNqP2pXDuJIY8kbJ7Ym8bAvzeaowGK626qvIQ4enr8YzdxEOHLD3bqgnNaZogci1OAQ/QombA7zQtqWwzTOGrt16j5MuUWSFLp2SnR/s1oZlVcb1NdPj1GlitYyPB0uzfYRp2kqyyJ/WTf28mgqtovNKpvYLNhcPhyYv1kfRx3MaCSrkiKOBuKY5/+gP27dAGFV/SgQAz2QvWVJCi/IylCUZZlXhl1iF/98S9nHDsNvNusKd59njN5WQgFz9A2gdwU65w2evV9KfOyY/7CJfpq2w9an0cG8eWh9qCK/1i7No7xkDS6Hqzmc6Q/i55lwVMHz+VcPVBlk55LkYAxgEZESR12XkDLty+wOzhFlMK/AmB8pvCzIKi89/wb6P7OtIQcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
